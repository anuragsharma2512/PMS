import express from "express"
import cors from "cors"
const app = express()

// basic configurations
app.use(express.json({ limit: "16kb"}))
app.use(express.urlencoded({ extended: true, limit: "16kb"}))
app.use(express.static("public"))

// cors configuration
app.use(cors({
  origin: process.env.CORS_ORIGINS?.split(",") || "http://localhost:5137",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization",]
}))


// importing routes
import healthCheckRouter from "./routes/healthcheck.routes.js"

app.use("/api/v1/healthcheck", healthCheckRouter);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app