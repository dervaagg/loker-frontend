import React from "react";
import Layout from "../../components/Layout";
import { Table3 } from "../../components/Detail_tbl_loker";
import { useParams } from "react-router-dom";

export default function DetailRegList() {
  const { jobId } = useParams();
  const { regId } = useParams();
  return (
    <Layout>
      <Table3 idloker={jobId} no_ktp={regId} />
    </Layout>
  );
}
