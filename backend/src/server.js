//const express = require('express');

import express from "express";
import dotenv from "dotenv";

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api/auth")



app.listen(3000, () => console.log ("Server running on port 3000 1"));