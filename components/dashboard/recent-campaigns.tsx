import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const campaigns = [
  {
    name: "Summer Sale Newsletter",
    type: "Email",
    status: "Sent",
    date: "2024-03-15",
  },
  {
    name: "Flash Sale Alert",
    type: "SMS",
    status: "Scheduled",
    date: "2024-03-20",
  },
  {
    name: "Product Launch",
    type: "Email",
    status: "Draft",
    date: "2024-03-25",
  },
];

export function RecentCampaigns() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Campaigns</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {campaigns.map((campaign) => (
            <div
              key={campaign.name}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div>
                <p className="font-medium">{campaign.name}</p>
                <p className="text-sm text-muted-foreground">{campaign.date}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={campaign.type === "Email" ? "default" : "secondary"}>
                  {campaign.type}
                </Badge>
                <Badge
                  variant={
                    campaign.status === "Sent"
                      ? "success"
                      : campaign.status === "Scheduled"
                      ? "warning"
                      : "secondary"
                  }
                >
                  {campaign.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}