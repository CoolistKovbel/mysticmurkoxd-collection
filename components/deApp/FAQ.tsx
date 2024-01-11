"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export const FAQ = () => {


  return (
    <div className="flex items-center justify-center flex-col w-full my-20">
      <h2 className=" text-2xl font-bold underline mb-10">Frequently Answer Questions</h2>

      <div className="flex items-center justify-between w-full md:w-[60%] flex-col md:flex-row gap-10">
        <div className="w-[50%]">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is a NFT collection?</AccordionTrigger>
              <AccordionContent>
                A NFT collection is a collection of ERC-721 tokens that existing
                on a blockchain network. Forged through a smart contract and
                read by a EVM. ERC-721 tokens are Non-Fundguble tokens, with
                each token being completely different from the next, able to
                store images or other types of data within the token. In this
                case it is a jpeg image.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Why do I want one?</AccordionTrigger>
              <AccordionContent>
                By holding this NFT you will be able to gain access towards
                other projects that I will build later in the future. If you
                trade it, you will loose your access. You will also be able to
                host and create your very own busen group.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Will there be more?</AccordionTrigger>
              <AccordionContent>
                Once I am situated with Ethereum and Nervos Network. There will
                be 1 more type of collection that may possible be dropped right
                here on the website.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className=" w-[50%] md:w-[40%] ">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Where can I trade?</AccordionTrigger>
              <AccordionContent>
                Well I hope you make some friends here and trade it between
                yourself and or set it on the opensea network
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What is MMC?</AccordionTrigger>
              <AccordionContent>
                Stands for Mystic Murko Collection, this is a small website made
                for the holders of the NFT where we can all vibe together and
                build a small community for those who are interesting in the
                blockchain or coding, small stepping stone towards the next
                project. Hope you can find the easter eggs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
