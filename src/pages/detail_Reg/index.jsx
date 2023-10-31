import React from "react";
import Layout from "../../components/Layout";
import Form4 from "../../components/Detail_reg";
import { useParams } from "react-router-dom";


export default function DetailReg() {
  const { jobId } = useParams();
  const { regId } = useParams();
  return (
    <Layout>
      <Form4 idloker={jobId} no_ktp={regId} />
    </Layout>
  );
}
