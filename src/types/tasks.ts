type RequestTask = {
  title?: string;
  description: string;
  status: "NOT_STARTED" | "ON_PROGRESS" | "DONE" | "REJECT";
  leadId?: string;
  teamId?: string;
};

export type { RequestTask };
