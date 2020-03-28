# simple-typescript-server
A simple server written in TypeScript 


```
npm init

npm install typescript @types/node

mkdir src

touch index.ts

tsc --init

```

### Modify scripts section of package.json
```
 "scripts": {
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node ./build/index.js"
  },
```

### Add include to tsconfig.json
```
"include":[
    "./src"
  ]
```

### Build App
```
npm run-script build  
```


