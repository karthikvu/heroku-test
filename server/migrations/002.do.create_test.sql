ALTER TABLE public.users
    ADD COLUMN active boolean;

ALTER TABLE public.users
    ADD COLUMN deleted boolean;
