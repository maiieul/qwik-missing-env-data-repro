import {
  component$,
  createContextId,
  Signal,
  useContext,
} from "@builder.io/qwik";

export const Provider2Context =
  createContextId<Signal<string>>("Provider2Context");

export const Provider2 = component$(() => {
  const theme = useContext(Provider2Context);

  theme.value = "light";

  return (
    <>
      <script
        dangerouslySetInnerHTML="
        console.log('This is a script tag with a dangerous innerHTML');
      "
      />
      {theme}
    </>
  );
});
