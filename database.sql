CREATE TABLE images(
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR (50),
    "description" VARCHAR(80),
    "likes" INTEGER
);

INSERT INTO "images"
    ("path","description","likes")
VALUES
    ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0),
    ('images/P1GTR.jpg', 'Photo of a Mclaren P1GTR', 2);
		