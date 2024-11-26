CREATE TABLE IF NOT EXISTS "players" (
	"id" integer PRIMARY KEY NOT NULL,
	"points" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "starting_lineup" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "starting_lineup_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"user_id" integer NOT NULL,
	"round_id" integer NOT NULL,
	"player_id" integer NOT NULL,
	"position" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_lineup" (
	"user_id" integer NOT NULL,
	"lineup_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "users_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"username" varchar NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "starting_lineup" ADD CONSTRAINT "starting_lineup_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_lineup" ADD CONSTRAINT "user_lineup_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_lineup" ADD CONSTRAINT "user_lineup_lineup_id_starting_lineup_id_fk" FOREIGN KEY ("lineup_id") REFERENCES "public"."starting_lineup"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
