import type { FullConfig } from '@playwright/test';
import fs from 'fs';

async function globalTeardown(config: FullConfig): Promise<void> {
  
  console.log('Cleaning after test run...');


  if (fs.existsSync('storageState.json')) {
    fs.unlinkSync('storageState.json');
    console.log('storageState.json deleted');
  }


}

export default globalTeardown;