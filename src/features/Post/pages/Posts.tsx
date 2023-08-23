import { Divider, Flex } from "@chakra-ui/react";
import { PostCard } from "../components/PostCard/PostCard";
import { IPosts } from "../interface/posts.interface";

export function Posts({}: IPosts) {
  const posts = [
    {
      id: 1,
      title:
        "Após ser reencarnado em um mundo mágico como Rudeus Greyrat, um recém-nascido, ele agora vive aventuras após ter morrido ao salvar um estranho de um acidente de trânsito.",
      img: "https://i.pinimg.com/videos/thumbnails/originals/4f/c7/76/4fc776ae7c6dafd152c2aca583cbbdf1.0000000.jpg",
    },
    {
      id: 2,
      title: "A Jornada do Herói: Em Busca da Verdade",
      img: "https://i.pinimg.com/736x/07/55/59/075559d17972ceb35198fc1fe77103b7.jpg",
    },
    {
      id: 3,
      title: "A Fantasia Épica: O Reino Perdido",
      img: "https://i.pinimg.com/1200x/b4/f8/42/b4f842d80792713a286102068dcc6eaf.jpg",
    },
    {
      id: 4,
      title: "As Crônicas do Destino: A Lenda Desperta",
      img: "https://i.pinimg.com/236x/9e/c6/80/9ec68025d34708acd28d6154a291a327.jpg",
    },
    {
      id: 5,
      title: "Estrelas do Crepúsculo: Renascendo das Cinzas",
      img: "https://i.pinimg.com/1200x/e4/f4/ec/e4f4ecbf7b5133fa3e5ea2c583563f36.jpg",
    },
    {
      id: 6,
      title: "Mundos Além: A Saga Interdimensional",
      img: "https://i.pinimg.com/750x/29/91/65/299165f707883adf883f90bc2ef54c65.jpg",
    },
    {
      id: 7,
      title: "Coração de Guerreiro: O Caminho do Samurai",
      img: "https://i.pinimg.com/originals/fb/a9/ab/fba9ab3335d2b7167fdd422fe7c3c84f.jpg",
    },
    {
      id: 8,
      title: "Almas do Infinito: A Luta dos Bravos",
      img: "https://i.pinimg.com/564x/51/53/6e/51536e78beedbfb91e4e1fab3eea65c9.jpg",
    },
    {
      id: 9,
      title: "Magia Ancestral: Segredos do Clã Arcano",
      img: "https://i.pinimg.com/474x/70/ae/48/70ae4882946f227c0f0f646782f4435f.jpg",
    },
    {
      id: 10,
      title: "O Destino dos Nove Mundos: A Profecia Antiga",
      img: "https://i.pinimg.com/236x/bd/31/3d/bd313db9e31e05bde977f6a1b5f00255.jpg",
    },
  ];

  const midpoint = Math.ceil(posts.length / 2);
  const leftPosts = posts.slice(0, midpoint);
  const rightPosts = posts.slice(midpoint);

  return (
    <Flex
      width="70%"
      justifyContent="center"
      overflowY="scroll"
      css={{
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "blue",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-track": {
          background: "black",
        },
      }}
      maxHeight="700px"
    >
      <>
        <Flex width="50%" flexDirection="column">
          {leftPosts.map((post) => (
            <PostCard key={post.id} title={post.title} img={post.img} />
          ))}
        </Flex>

        <Flex width="2px">
          <Divider orientation="vertical" />
        </Flex>

        <Flex width="50%" height="auto" flexDirection="column">
          {rightPosts.map((post) => (
            <PostCard key={post.id} title={post.title} img={post.img} />
          ))}
        </Flex>
      </>
    </Flex>
  );
}
