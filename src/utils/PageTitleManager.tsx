import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageTitles } from "../constants/pageTitles";

const PageTitleManager = () => {
  const location = useLocation();

  const titlesMap: Record<string, PageTitles> = {
    "/technologies": PageTitles.TECHNOLOGIES,
  };

  useEffect(() => {
    document.title = titlesMap[location.pathname] || PageTitles.DEFAULT;
  }, [location.pathname]);

  return null;
};

export default PageTitleManager;
