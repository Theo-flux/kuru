import { Paragraph, Title } from '@/atoms/typographys';
import Input from '@/atoms/forms/Input';
import Button from '@/atoms/forms/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LinkSchema, TLinkSchema } from '@/types/validators';

const HomeView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLinkSchema>({
    mode: 'onChange',
    resolver: zodResolver(LinkSchema),
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<TLinkSchema> = async (formData) => {
    console.log(formData);
  };

  return (
    <div className="hero min-h-screen bg-ebony">
      <div className="hero-content text-neutral-content text-center ">
        <div className="flex flex-col space-y-4">
          <div className="max-w-xl">
            <Title className="text-cerise" text="Shorten Your Loooong Links :)" />
            <Paragraph
              className="max-w-md text-center w-full mx-auto"
              text="Kukuru is an efficient and easy-to-use URL shortening service that streamlines your online experience."
            />
          </div>

          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="flex flex-col sm:flex-row justify-start md:space-x-2">
                <Input
                  className="w-full"
                  placeholder="Enter the link here"
                  {...register('link')}
                  error={errors.link?.message}
                />
                <Button className="sm:w-fit" variant="filled" type="submit">
                  Shorten now!
                </Button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;