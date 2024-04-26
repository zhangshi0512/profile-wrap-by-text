// pages/api/upload.ts
const nextConnect = require("next-connect");
import type { NextApiRequest, NextApiResponse } from "next";
import multer from "multer";

// Multer configuration for file upload
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 Megabytes
  },
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      cb(null, false); // Indicate rejection without an error
    } else {
      cb(null, true); // Indicate acceptance
    }
  },
});

const handler = nextConnect({
  onError: (error: any, req: NextApiRequest, res: NextApiResponse) => {
    console.error(error);
    res.status(500).json({ statusCode: 500, message: error.message });
  },
  onNoMatch: (req: NextApiRequest, res: NextApiResponse) => {
    res.status(405).json({ statusCode: 405, message: "Method Not Allowed" });
  },
});

// Use the upload middleware to handle file uploads via 'image' field in the form
handler.use(upload.single("image"));

handler.post((req: NextApiRequest, res: NextApiResponse) => {
  if (!req.file) {
    return res
      .status(400)
      .json({ statusCode: 400, message: "No file uploaded." });
  }

  // Process the file here. For now, we'll just send back a success response
  // along with the original name of the file uploaded
  return res.status(200).json({
    statusCode: 200,
    message: "File uploaded successfully!",
    fileName: req.file.originalname,
  });
});

export const config = {
  api: {
    bodyParser: false, // Disables the default Next.js bodyParser due to file uploads
  },
};

export default handler;
