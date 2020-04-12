# GoStack_Project2

Para acesso a Base de dados utilizaremos uma imagem Docker::postgres
-- docker run --name { environment.postgres.imageName } -e POSTGRES_PASSWORD={ environment.postgres.password } POSTGRES_USER={ environment.postgres.user } -p 5432:5432 -d postgres

USER: { environment.postgres.user }
PASS: { environment.postgres.password }