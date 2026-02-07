"use client";

import { Copy, Server } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { Badge } from "./badge";
import { Button } from "./button";
import toast from "react-hot-toast";

interface ApiAlertProps {
  title: string;
  description: string;
  variant: "public" | "admin";
}

const textMap: Record<ApiAlertProps["variant"], string> = {
  public: "Public",
  admin: "Admin",
};

type BadgeVariant = React.ComponentProps<typeof Badge>["variant"];

const variantMap: Record<ApiAlertProps["variant"], BadgeVariant> = {
  public: "secondary",
  admin: "destructive",
};

export const ApiAlert: React.FC<ApiAlertProps> = ({
  title,
  description,
  variant = "public",
}) => {
  const onCopy = () => {
    navigator.clipboard.writeText(description);
    toast.success("API berhasil di copy");
  };

  return (
    <Alert className="flex flex-col gap-3 py-4">
      <div className="flex items-center gap-3">
        <Server className="w-5 h-5 text-muted-foreground" />
        <AlertTitle className="flex items-center gap-2 text-sm font-semibold">
          <span className="uppercase tracking-wide">{title}</span>
          <Badge variant={variantMap[variant]} className="text-xs px-2 py-0.5">
            {textMap[variant]}
          </Badge>
        </AlertTitle>
      </div>

      <AlertDescription className="mt-1 flex items-center justify-between rounded-md border bg-muted/50 px-3 py-2">
        <code className="font-mono text-sm font-medium truncate">
          {description}
        </code>
        <Button
          variant="outline"
          size="sm"
          className="ml-3 cursor-pointer"
          onClick={onCopy}
        >
          <Copy className="h-4 w-4" />
        </Button>
      </AlertDescription>
    </Alert>
  );
};
