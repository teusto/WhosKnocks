import React, { useEffect, useState } from "react";
import { getUser } from "../services/Api";
import QRCodeComponent from "../components/QR";
import UserPassCard from "../components/UserPassCard";
import { useParams } from "react-router-dom";
import PageFrame from "../components/Page.frame";
import "./styles.scss"
import ProfileModule from "../features/modules/profile";
import QuickActionsModule from "../features/modules/actions";

type DashboardBoxModuleProps = {
  size: string
  aspectRatio?: string
  module?: JSX.Element
}

const DashboardBoxModule = ({aspectRatio, size, module}: DashboardBoxModuleProps) => {
  return (
    <div className="BoxModule_wrapper" style={{ gridColumn: `${size}`}}>
      <div className="BoxModule_container">
        {module}
      </div>
    </div>
  )
}

const DashboardPage: React.FC = () => {

  return (
    <PageFrame className="grid-template">
        <DashboardBoxModule size="6/13" module={<ProfileModule />} />
        <DashboardBoxModule size="1/4" module={<p>notifications</p>} />
        <DashboardBoxModule size="4/10" module={<QuickActionsModule />} />
        <DashboardBoxModule size="10/13" module={<p>Lats events</p>} />
        <DashboardBoxModule size="1/13" module={<p>something blocked</p>} />
    </PageFrame>
  );
};

export default DashboardPage;
