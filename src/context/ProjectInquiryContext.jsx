import { createContext, useCallback, useContext, useMemo, useState } from "react";

const ProjectInquiryContext = createContext(null);

/**
 * Lets a service card/modal "hand off" a chosen project type to the
 * contact form below, without prop-drilling through Services and Contact.
 */
export function ProjectInquiryProvider({ children }) {
  const [projectType, setProjectType] = useState("");

  const requestProjectType = useCallback((type) => setProjectType(type), []);
  const clearProjectType = useCallback(() => setProjectType(""), []);

  const value = useMemo(
    () => ({ projectType, requestProjectType, clearProjectType }),
    [projectType, requestProjectType, clearProjectType]
  );

  return <ProjectInquiryContext.Provider value={value}>{children}</ProjectInquiryContext.Provider>;
}

export function useProjectInquiry() {
  const ctx = useContext(ProjectInquiryContext);
  if (!ctx) {
    throw new Error("useProjectInquiry must be used within a ProjectInquiryProvider");
  }
  return ctx;
}
