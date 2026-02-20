export interface TestUser {
  username: string;
  password: string;
}

export function getTestUser(): TestUser {
  const username = process.env.USER_NAME;
  const password = process.env.PASSWORD;

  if (!username || !password) {
    throw new Error(
      'USER_NAME and PASSWORD must be defined in .env'
    );
  }

  return { username, password };
}
