import React from "react";
import Layout from "../../components/Layout";
import Form3 from "../../components/Update_job";
import { useParams } from "react-router-dom";
export default function UpdateJob() {
  const {jobId} = useParams();
  return (
    <Layout>
      <Form3 idloker={jobId}/>
    </Layout>
  );
}
