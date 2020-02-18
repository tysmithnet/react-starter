-- ***************************************************
-- *****************TABLES****************************
-- ***************************************************
CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  fname TEXT NOT NULL,
  lname TEXT NOT NULL,
  uname TEXT UNIQUE NOT NULL,
  image_url TEXT,
  pass TEXT NOT NULL -- we don't care about security in dummy apps
);
CREATE TABLE permission (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  desc TEXT
);
CREATE TABLE user_permission (
  user_id INTEGER NOT NULL,
  permission_id INTEGER NOT NULL,
  PRIMARY KEY (user_id, permission_id),
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE NO ACTION,
  FOREIGN KEY (permission_id) REFERENCES permission(id) ON DELETE CASCADE ON UPDATE NO ACTION
);
CREATE TABLE project (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  creator_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  desc TEXT,
  FOREIGN KEY (creator_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE NO ACTION
);
CREATE TABLE build (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  project_id INTEGER NOT NULL,
  triggered_by INTEGER NOT NULL,
  started_utc TEXT NOT NULL,
  ended_utc TEXT NOT NULL,
  FOREIGN KEY (project_id) REFERENCES project(id) ON DELETE CASCADE ON UPDATE NO ACTION
);
CREATE TABLE report (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    creator_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    desc TEXT,
    data TEXT,
    created_utc TEXT NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE NO ACTION
);
-- ***************************************************
-- *******************DATA****************************
-- ***************************************************
INSERT INTO user (fname, lname, uname, image_url, pass) VALUES ('Jane', 'Doe', 'jdoe', 'https://randomuser.me/api/portraits/women/83.jpg', 'password');
