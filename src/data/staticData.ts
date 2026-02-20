import { RandomData } from '../utils/randomData';

export function getTelephoneCreationDetails() {
  const randomPassword = RandomData.generateRandomPassword();

  return {
    accountName: `AccountName_${RandomData.getTimeInSec()}`,
    userName: `testUser_${RandomData.getTimeInSec()}`,
    email: `teleAgent_${RandomData.getTimeInSec()}@gmail.com`,

    password: randomPassword,
    confirmPassword: randomPassword,
   
  };
}
