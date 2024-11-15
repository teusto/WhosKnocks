import React, { useEffect, useState } from "react";
import { getUser } from "../services/Api";
import QRCodeComponent from "../components/QR";
import UserPassCard from "../components/UserPassCard";
import { useParams } from "react-router-dom";
import PageFrame from "../components/Page.frame";

const DashboardPage: React.FC = () => {

  return (
    <PageFrame>
        <div>Dashboard Page</div>
        <div>
            tenant info
        </div>
        <div>
            my profile
        </div>
        <div>
            billing
        </div>
    </PageFrame>
  );
};

export default DashboardPage;
