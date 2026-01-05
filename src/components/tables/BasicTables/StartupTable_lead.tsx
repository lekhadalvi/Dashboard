import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import Badge from "../../ui/badge/Badge";

interface PartnershipLead {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  partnershipType: string;
  interest: string;
  deliverables: string;
}



// Define the table data using the interface
const tableData: PartnershipLead[] = [
  {
    id: 1,
    name: "Rahul Mehta",
    email: "rahul@finlabs.in",
    phone: "+91 9876543210",
    company: "FinLabs Pvt Ltd",
    partnershipType: "Strategic Partnership",
    interest: "Investor access & demo days",
    deliverables: "Introductions to angel investors",
  },
  {
    id: 2,
    name: "Ananya Kapoor",
    email: "ananya@growthmedia.com",
    phone: "+91 9123456789",
    company: "Growth Media",
    partnershipType: "Media Partnership",
    interest: "Brand visibility & PR",
    deliverables: "Co-branded campaigns",
  },
];

const StartupTable_lead = () => {
  return (
   <>
     <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
<TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
  <TableRow>
    <TableCell isHeader className="px-5 py-3 text-start">Name</TableCell>
    <TableCell isHeader className="px-5 py-3 text-start">email</TableCell>
    <TableCell isHeader className="px-5 py-3 text-start">Company</TableCell>
    <TableCell isHeader className="px-5 py-3 text-start">Partnership</TableCell>
    <TableCell isHeader className="px-5 py-3 text-start">Interest</TableCell>
    <TableCell isHeader className="px-5 py-3 text-start">Deliverables</TableCell>
    <TableCell isHeader className="px-5 py-3 text-start">Contact</TableCell>
  </TableRow>
</TableHeader>



          {/* Table Body */}
       <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
  {tableData.map((lead) => (
    <TableRow key={lead.id}>
      {/* Name + Email */}
      <TableCell className="px-5 py-4 text-start">
        <div>
          <span className="block font-medium text-gray-800 dark:text-white/90">
            {lead.name}
          </span>
          <span className="block text-xs text-gray-500">
            {/* {lead.email} */}
          </span>
        </div>
      </TableCell>
     <TableCell className="px-5 py-4 text-start">
        <div>
          <span className="block font-medium text-gray-800 dark:text-white/90">
            {/* {lead.name} */}
          </span>
          <span className="block font-medium text-gray-800 dark:text-white/90">
            {lead.email}
          </span>
        </div>
      </TableCell>
      {/* Company */}
      <TableCell className="px-4 py-3 text-gray-500 text-start">
        {lead.company}
      </TableCell>

      {/* Partnership Type */}
      <TableCell className="px-4 py-3 text-start">
        <Badge size="sm" color="success">
          {lead.partnershipType}
        </Badge>
      </TableCell>

      {/* Area of Interest */}
      <TableCell className="px-4 py-3 text-gray-500 text-start max-w-xs truncate">
        {lead.interest}
      </TableCell>

      {/* Expected Deliverables */}
      <TableCell className="px-4 py-3 text-gray-500 text-start max-w-xs truncate">
        {lead.deliverables}
      </TableCell>

      {/* Phone */}
      <TableCell className="px-4 py-3 text-gray-500">
        {lead.phone}
      </TableCell>
    </TableRow>
  ))}
</TableBody>


        </Table>
      </div>
    </div>
   </>
  )
}

export default StartupTable_lead