import { Request, Response } from "express";

export default {
  upload: async (req: Request, res: Response) => {
    try {
      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No files were uploaded.");
      }
      const sampleFile = req.files.productImage as any;
      const filepath = `public/${sampleFile.name}`;
      sampleFile.mv(filepath, (err: any) => {
        if (err) return res.status(500).json({ data: { error: err } });
        res
          .status(200)
          .json({ data: { message: "File uploaded successfully" } });
      });
    } catch (error) {
      res.status(500).json({ data: { error } });
    }
  },
};
