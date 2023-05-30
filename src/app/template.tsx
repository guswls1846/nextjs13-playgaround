export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className={"bg-amber-500"}>
      루트 템플릿 파일
      {children}
    </div>
  );
}
