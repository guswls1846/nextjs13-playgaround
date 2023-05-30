export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={"bg-green-500"}>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>대시 보드 레이아웃</nav>

      {children}
    </section>
  );
}
