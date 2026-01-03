export function Footer() {
  return (
    <footer className="mt-12">
      <div className="rounded-lg border bg-background px-6 py-6">
        <div className="grid grid-cols-3 items-center text-sm text-muted-foreground">
          <div />
          <p className="text-center">
            © {new Date().getFullYear()} Sanggar Store. All rights reserved.
          </p>
          <div className="text-right hidden sm:block">Admin Dashboard</div>
        </div>
      </div>
      <div className="mx-auto mt-6 h-px max-w-screen-2xl bg-border" />
    </footer>
  );
}
