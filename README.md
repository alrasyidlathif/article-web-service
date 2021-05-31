dockerize:

1. cd article-service (project directory)

2. docker-compose up

(jika "ERROR SYNC DB")

3. docker-compose up (lagi)

note:

a. "ERROR SYNC DB" terjadi karena mysql belum berjalan sepenuhnya tapi sequelize sudah mencoba untuk melakukan sync.

b. deploy di docker sudah run tapi belum bisa diakses dari local (?)

c. - for run (prod): npm start
   - for run (dev): npm run dev
   - for run testing: npm test
