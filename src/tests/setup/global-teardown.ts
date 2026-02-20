import type { FullConfig } from '@playwright/test';
import fs from 'fs';

async function globalTeardown(config: FullConfig): Promise<void> {
  
  console.log('Cleaning after test run...');

  // Example 1: Delete storage state file
  if (fs.existsSync('storageState.json')) {
    fs.unlinkSync('storageState.json');
    console.log('storageState.json deleted');
  }

  // Example 2: You can clean DB here
  // Example 3: Call API to delete test user
  // Example 4: Remove temp files

}

export default globalTeardown;