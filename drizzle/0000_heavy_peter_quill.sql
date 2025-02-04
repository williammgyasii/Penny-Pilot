CREATE TABLE "accounts" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "accounts_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"plaid_id" varchar(255),
	"name" varchar(255) NOT NULL,
	"userId" varchar(255) NOT NULL,
	"classvar" varchar(255),
	CONSTRAINT "accounts_userId_unique" UNIQUE("userId")
);
--> statement-breakpoint
CREATE TABLE "transactions" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "transactions_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"amount" integer,
	"date" text NOT NULL,
	"category" varchar(255),
	"description" varchar(255)
);
