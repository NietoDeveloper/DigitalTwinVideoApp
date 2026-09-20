"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// He actualizado los links a versiones de Adobe/CDN más compatibles con streaming directo en localhost
const videos = [
  "https://v.ftcdn.net/02/10/35/33/700_F_210353392_8Z99h8lR6P7O0E0W9v5i2kR9uUuX6X3Y_ST.mp4",
  "https://v.ftcdn.net/05/57/02/76/700_F_55