import React from "react";
import Layout from "../../components/Layout";
import Form2 from "../../components/Detail_job";
import { useParams } from "react-router-dom";

export default function DetailJob() {
  const {jobId} = useParams();
  // console.log("jobId", jobId);
  return (
    <Layout>
      <Form2 idloker={jobId}/>
    </Layout>
  );
}
