-- Create staging schema
CREATE SCHEMA IF NOT EXISTS staging;

-- Set search path to staging schema
SET search_path TO staging;

-- Copy all tables from public schema to staging schema
CREATE TABLE IF NOT EXISTS staging."User" (
    LIKE public."User" INCLUDING ALL
);

CREATE TABLE IF NOT EXISTS staging."Candidate" (
    LIKE public."Candidate" INCLUDING ALL
);

CREATE TABLE IF NOT EXISTS staging."Employer" (
    LIKE public."Employer" INCLUDING ALL
);

CREATE TABLE IF NOT EXISTS staging."VerificationCode" (
    LIKE public."VerificationCode" INCLUDING ALL
);

-- Copy enums
CREATE TYPE staging."Role" AS ENUM ('CANDIDATE', 'EMPLOYER');

-- Set constraints
ALTER TABLE staging."Candidate"
    ADD CONSTRAINT "Candidate_userId_fkey" 
    FOREIGN KEY ("userId") 
    REFERENCES staging."User"(id);

ALTER TABLE staging."Employer"
    ADD CONSTRAINT "Employer_userId_fkey" 
    FOREIGN KEY ("userId") 
    REFERENCES staging."User"(id); 