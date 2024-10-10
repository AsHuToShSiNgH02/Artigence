import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"

export default function Sidebar() {
  return (
    <div className="w-74 h-full overflow-y-auto border-r border-border">
      <Card className="h-full rounded-none">
        <CardHeader className="p-4 sticky top-0 bg-background z-10">
          <CardTitle>Findings</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">RBC</TableHead>
                    <TableHead>Count</TableHead>
                    <TableHead>Percentage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Angled Cells</TableCell>
                    <TableCell>222</TableCell>
                    <TableCell>67%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Borderline Ovalocytes</TableCell>
                    <TableCell>50</TableCell>
                    <TableCell>20%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Burr Cells</TableCell>
                    <TableCell>87</TableCell>
                    <TableCell>34%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Fragmented Cells</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>0.12%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              
              <Table className="mt-4">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">WBC</TableHead>
                    <TableHead>Count</TableHead>
                    <TableHead>Percentage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Basophil</TableCell>
                    <TableCell>222</TableCell>
                    <TableCell>67%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Eosinophil</TableCell>
                    <TableCell>50</TableCell>
                    <TableCell>20%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Lymphocyte</TableCell>
                    <TableCell>87</TableCell>
                    <TableCell>34%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Monocyte</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>0.12%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              
              <Table className="mt-4">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Platelets</TableHead>
                    <TableHead>Count</TableHead>
                    <TableHead>Percentage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Normal</TableCell>
                    <TableCell>200</TableCell>
                    <TableCell>95%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Giant</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell>4.5%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Clumped</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>0.5%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
      </Card>
    </div>
  )
}