// src/hooks/useAuth.ts
'use client';

import { useContext } from 'react';
import { useAuth as originalUseAuth } from '@/context/AuthContext';

// Re-export the hook from the context
export const useAuth = originalUseAuth;