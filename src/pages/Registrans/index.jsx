import React from "react";
import Layout from "../../components/Layout";
import { Table2 } from "../../components/Table_reg";
import { useParams } from "react-router-dom";

export default function Registrant() {
  const { jobId } = useParams();
  const { regId } = useParams();
  return (
    <Layout>
      <Table2 idloker={jobId} no_ktp={regId}/>
    </Layout>
  );
}
