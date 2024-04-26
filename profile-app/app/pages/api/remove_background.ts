// pages/api/remove_background.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { AuthUnknownError } from "@supabase/supabase-js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Example: Call to a background removal service
    try {
      const { imageUrl } = req.body;
      const response = await axios.post(
        "https://api.backgroundremovalservice.com/remove",
        {
          image: imageUrl,
        }
      );
      res.status(200).json(response.data);
    } catch (error: unknown) {
      const message = (error as any).message;
      res.status(500).json({ error: message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
