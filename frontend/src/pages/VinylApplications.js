import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import Banner from "../components/Banner";

const VinylApplications = () => {
  const bannerData = {
    bannerImg: "/images/banners/collage.png",
    title: "Education",
    breadcrumbs: [
      { label: "Home", path: "/", active: false },
      { label: "Vinyl Flooring", path: "/vinyl-flooring", active: false },
      { label: "Education", path: null, active: true },
    ],
  };

  return (
    <Layout>
      <Banner
        bannerImg={bannerData.bannerImg}
        title={bannerData.title}
        breadcrumbs={bannerData.breadcrumbs}
      />

      <section className="vinyl-applications-section">
        <div className="container"></div>
      </section>
    </Layout>
  );
};

export default VinylApplications;
