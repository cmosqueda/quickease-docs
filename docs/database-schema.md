---
sidebar_label: Database Schema
---

# Database Schema

This is the database schema of QuickEase 2.0. _This may change over time, depending on the updates._

## Prisma Schema

This is the complete schema model for the prisma client in generating the database.

```
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
  output   = "./client/"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id           String   @id @default(uuid())
  password     String
  first_name   String
  last_name    String
  email        String   @unique
  gender       String?
  phone_number String?
  badges       Json?
  is_public    Boolean  @default(true)
  created_at   DateTime @default(now())
  updated_at   DateTime @default(now())
  is_admin     Boolean  @default(false)

  flashcards           Flashcard[]
  notes                Note[]
  quizzes              Quiz[]
  posts                Post[]
  comments             Comment[]
  postVotes            PostVote[]
  commentVotes         CommentVote[]
  quizAttempts         QuizAttempt[]
  activityLogsReceived UserActivityLog[] @relation("ReceivedLogs")
  activityLogsSent     UserActivityLog[] @relation("SentLogs")
  forumReports         Report[]          @relation("ReportsByUser")
}

model Flashcard {
  id              String   @id @default(uuid())
  user            User     @relation(fields: [user_id], references: [id], onDelete: Cascade)
  user_id         String
  title           String
  description     String?
  flashcards      Json
  is_public       Boolean? @default(true)
  created_at      DateTime @default(now())
  updated_at      DateTime @default(now())
  is_ai_generated Boolean? @default(false)

  post_attachments PostAttachment[]
}

model Note {
  id               String           @id @default(uuid())
  user             User             @relation(fields: [user_id], references: [id], onDelete: Cascade)
  user_id          String
  title            String
  notes_content    String
  is_public        Boolean?         @default(true)
  created_at       DateTime         @default(now())
  updated_at       DateTime         @default(now())
  is_ai_generated  Boolean?         @default(false)
  post_attachments PostAttachment[]
}

model Quiz {
  id              String   @id @default(uuid())
  user            User     @relation(fields: [user_id], references: [id], onDelete: Cascade)
  user_id         String
  quiz_content    Json
  title           String
  description     String?
  is_public       Boolean? @default(true)
  created_at      DateTime @default(now())
  updated_at      DateTime @default(now())
  is_ai_generated Boolean? @default(false)
  is_randomized   Boolean? @default(false)
  timed_quiz      Decimal?

  post_attachments PostAttachment[]
  attempts         QuizAttempt[]
}

model Tag {
  id         String   @id @default(uuid())
  tag_name   String   @unique
  created_at DateTime @default(now())

  posts PostTag[]
}

model Post {
  id         String   @id @default(uuid())
  user       User     @relation(fields: [user_id], references: [id], onDelete: Cascade)
  user_id    String
  title      String
  post_body  String
  created_at DateTime @default(now())
  updated_at DateTime @default(now())
  is_public  Boolean  @default(true)

  tags        PostTag[]
  comments    Comment[]
  votes       PostVote[]
  attachments PostAttachment[]
}

model PostTag {
  tag_id  String
  post_id String

  tag  Tag  @relation(fields: [tag_id], references: [id], onDelete: Cascade)
  post Post @relation(fields: [post_id], references: [id], onDelete: Cascade)

  @@id([tag_id, post_id])
}

model Comment {
  id                String    @id @default(uuid())
  parent_comment_id String?
  parent_comment    Comment?  @relation("CommentReplies", fields: [parent_comment_id], references: [id], onDelete: Cascade)
  replies           Comment[] @relation("CommentReplies")

  post         Post     @relation(fields: [post_id], references: [id], onDelete: Cascade)
  post_id      String
  user         User     @relation(fields: [user_id], references: [id], onDelete: Cascade)
  user_id      String
  comment_body String
  created_at   DateTime @default(now())
  updated_at   DateTime @default(now())

  votes CommentVote[]
}

model PostVote {
  user_id   String
  post_id   String
  vote_type Int

  user User @relation(fields: [user_id], references: [id], onDelete: Cascade)
  post Post @relation(fields: [post_id], references: [id], onDelete: Cascade)

  @@id([user_id, post_id])
}

model CommentVote {
  user_id    String
  comment_id String
  vote_type  Int

  user    User    @relation(fields: [user_id], references: [id], onDelete: Cascade)
  comment Comment @relation(fields: [comment_id], references: [id], onDelete: Cascade)

  @@id([user_id, comment_id])
}

enum ResourceType {
  NOTE
  QUIZ
  FLASHCARD
}

model PostAttachment {
  id      String @id @default(uuid())
  post    Post   @relation(fields: [post_id], references: [id], onDelete: Cascade)
  post_id String

  resource_type ResourceType

  note_id      String?
  flashcard_id String?
  quiz_id      String?

  note      Note?      @relation(fields: [note_id], references: [id])
  flashcard Flashcard? @relation(fields: [flashcard_id], references: [id])
  quiz      Quiz?      @relation(fields: [quiz_id], references: [id])

  created_at DateTime @default(now())
  updated_at DateTime @default(now())

  @@index([resource_type])
}

model QuizAttempt {
  id           String    @id @default(uuid())
  quiz         Quiz      @relation(fields: [quiz_id], references: [id], onDelete: Cascade)
  quiz_id      String
  user         User      @relation(fields: [user_id], references: [id], onDelete: Cascade)
  user_id      String
  started_at   DateTime
  completed_at DateTime?
  answer_data  Json
  is_public    Boolean   @default(false)
}

model Report {
  id                   String   @id @default(uuid())
  reported_by          User     @relation("ReportsByUser", fields: [reported_by_id], references: [id], onDelete: Cascade)
  reported_by_id       String
  description          String
  reported_target_type String
  reported_at          DateTime @default(now())
  reported_target_id   String
}

model UserActivityLog {
  id                String   @id @default(uuid())
  recipient         User     @relation("ReceivedLogs", fields: [recipient_user_id], references: [id], onDelete: Cascade)
  recipient_user_id String
  actor             User     @relation("SentLogs", fields: [actor_user_id], references: [id], onDelete: Cascade)
  actor_user_id     String
  activity_type_id  String
  activity_type     String
  message           String
  is_read           Boolean  @default(false)
  created_at        DateTime @default(now())
}

```

## Table Description

Each model defined in the prisma schema is a PostgreSQL database table. Here’s a comprehensive guide to give you context for each table.

| **Table Name**    | **Description**                                                                                                  |
| ----------------- | ---------------------------------------------------------------------------------------------------------------- |
| `User`            | The core entity of the database. Stores user data and maintains relationships with multiple other tables.        |
| `Flashcard`       | Stores flashcard sets created by users.                                                                          |
| `Note`            | Stores user-generated notes.                                                                                     |
| `Quiz`            | Stores quizzes generated or taken by users.                                                                      |
| `Tag`             | Stores forum tags used for categorizing posts.                                                                   |
| `Post`            | Stores user-submitted forum posts.                                                                               |
| `PostTag`         | Stores the relationship between posts and tags. Helps with filtering and organizing posts under specific topics. |
| `Comment`         | Stores comments made by users on forum posts.                                                                    |
| `PostVote`        | Stores user votes (upvotes/downvotes) on posts.                                                                  |
| `CommentVote`     | Stores user votes on comments.                                                                                   |
| `PostAttachment`  | Stores study material attachments (notes, flashcards, quizzes) linked to specific forum posts.                   |
| `QuizAttempt`     | Stores records of quiz attempts by users, including scores, timestamps, and snapshots of selected answers.       |
| `Report`          | Stores user-submitted reports for flagged content or violations, supporting early-stage moderation features.     |
| `UserActivityLog` | Stores user activity logs related to forum interactions (e.g., post views, likes, and other engagement metrics). |
