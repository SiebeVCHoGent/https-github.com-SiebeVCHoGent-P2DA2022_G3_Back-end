module.exports = {
    log: {
      level: 'silly',
      disabled: false,
    },
    cors: {
      origins: ['http://localhost:3000'],
      maxAge: 3 * 60 * 60,
    },
    database: {
      client: 'mysql2',
      host: 'localhost',
      port: 3306,
      name: 'dendermondsebc',
      username: 'root',
      password: 'Jarnob2002',
    },
    auth: {
      argon: {
        saltLength: 16, //128 bits
        hashLength: 32, //256 bits
        timeCost: 4,
        memoryCost: 2 ** 17, //1024bits
      },
      jwt: {
        secret: 'microwaverefridgerator',
        expirationInterval: 60 * 60, //1u
        issuer: 'dendermondsebc.be',
        audience: 'dendermondsebc.be',
      },
    },
  };
  