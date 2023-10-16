import type { ReactElement } from "react";
import Layout from "@/components/Layout";
import NestedLayout from "@/components/NestedLayout";
import { NextPageWithLayout } from "@/pages/_app";

const Page: NextPageWithLayout = () => {
  return <div className="bg-amber-600">본문</div>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};

export default Page;
