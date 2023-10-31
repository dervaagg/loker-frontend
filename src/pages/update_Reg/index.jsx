import React from "react";
import Layout from "../../components/Layout";
import { Form5 } from "../../components/Update_reg";
import { useParams } from "react-router-dom";

export default function UpdateReg() {
  const { jobId } = useParams();
  const { regId } = useParams();
  return (
    <Layout>
      <Form5 idloker={jobId} no_ktp={regId} />
    </Layout>
  );
}
