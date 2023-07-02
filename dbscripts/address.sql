DO
$$
BEGIN
    IF NOT EXISTS (
        SELECT 1
        FROM pg_type
        WHERE typname = 'address'
    )
    THEN
        CREATE TYPE address AS (
            street VARCHAR,
            city VARCHAR,
            state VARCHAR,
            postal_code VARCHAR
        );
    END IF;
END;
$$;

