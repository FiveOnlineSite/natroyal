import React from "react";
import Layout from "../components/Layout";
import { NavLink, useParams } from "react-router-dom";
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

  const applicationData = [
    {
      type: "Education",
      para: "Our Education range of Vinyl Flooring is developed to help students concentrate, inspire and interact. The vibrant colors enhance creativity and concentration for both the students and facilitators.",
      applications: [
        {
          image: "/images/applications/education/MW2011.jpg",
          name: "Moonwalk",
        },
        {
          image: "/images/applications/education/SY2406.jpg",
          name: "Symphony",
        },
        {
          image: "/images/applications/education/EG2047.jpg",
          name: "Elegant",
        },
        {
          image: "/images/applications/education/Blue-Lagoon.jpg",
          name: "Accord",
        },
        {
          image: "/images/applications/education/SK2630.jpg",
          name: "Star Trek",
        },
        {
          image: "/images/applications/education/DZ2998.jpg",
          name: "Dazzle",
        },
        {
          image: "/images/applications/education/MK2152.jpg",
          name: "Mirakle",
        },
        {
          image: "/images/applications/education/RS3112.jpg",
          name: "Royal Star",
        },
        {
          image: "/images/applications/education/361004.jpg",
          name: "Nuplank",
        },
        {
          image: "/images/applications/education/MK2152.jpg",
          name: "Tiger",
        },
      ],
    },
    {
      type: "Healthcare",
      para: "Our flooring provides a healthy and hygienic environment to patients to enhance the healing and curing elements for a speedy recovery. The care givers receive aid in providing the same with ease and experience comfort in the work place. The Flooring is also designed for bare foot and continuous wet areas.",
      applications: [
        {
          image: "/images/applications/education/MW2011.jpg",
          name: "Moonwalk",
        },
        {
          image: "/images/applications/education/SY2406.jpg",
          name: "Symphony",
        },
      ],
    },
  ];

  const { category } = useParams(); // Get category from URL

  const selectedCategory = applicationData.find(
    (data) => data.type.toLowerCase() === category.toLowerCase()
  );

  if (!selectedCategory) {
    return <h2>No applications found for {category}</h2>;
  }

  return (
    <Layout>
      <Banner
        bannerImg={bannerData.bannerImg}
        title={bannerData.title}
        breadcrumbs={bannerData.breadcrumbs}
      />

      <section className="vinyl-applications-section">
        <div className="container">
          <h2 className="title new-title text-center">
            <span className="yellow-title">{selectedCategory.type}</span>
            {""}
          </h2>

          <p className="paragraph gray-para">{selectedCategory.para}</p>
        </div>
      </section>

      <section className="application-types-section">
        <div className="container">
          <div className="row">
            {selectedCategory.applications.map((application, index) => (
              <div className="col-lg-2 mt-4" key={index}>
                <NavLink to="/">
                  <div className="single-application-div">
                    <img src={application.image} alt={application.name} />
                    <h4>{application.name}</h4>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VinylApplications;
