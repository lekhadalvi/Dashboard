import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import StartupTables_leads from "../../components/tables/BasicTables/StartupTable_lead";



const StartupTables = () => {
  return (
    <>
   
      <PageMeta
        title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="startup leads" />
      <div className="space-y-6">
        {/* <ComponentCard title="startup">
          <BasicTableOne />
        </ComponentCard> */}
         <ComponentCard title="Basic Table 1">
          <StartupTables_leads/>
        </ComponentCard>
      </div>
    </>
  )
}

export default StartupTables