import {
  component$,
  createContextId,
  Signal,
  Slot,
  useContextProvider,
  useSignal,
} from "@builder.io/qwik";
import { Provider2, Provider2Context } from "../provider-2/provider-2";

export const Provider1Context =
  createContextId<Signal<string>>("Provider1Context");

export const Provider1 = component$(() => {
  const provider1Theme = useSignal<string>("light");
  useContextProvider(Provider1Context, provider1Theme);

  const provider2Theme = useSignal<string>("dark");
  useContextProvider(Provider2Context, provider2Theme);
  return (
    <>
      provider1Theme: {provider1Theme.value}
      <br />
      provider2Theme: {provider2Theme.value}
      <Slot />
      <Provider2 />
    </>
  );
});
