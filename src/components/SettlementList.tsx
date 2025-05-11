import { JSX, Key, useRef, useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";

const categories: (keyof typeof restaurantsByCategory)[] = [
  "Bancas",
  "Feiras",
  "Peixarias",
  "Restaurantes",
  "Supermercados",
];

const restaurantsByCategory = {
  Bancas: [
    {
      name: "Peixaria do Juvenal",
      image: "https://4.bp.blogspot.com/-tHmurGG8XPY/UuW5_cn6yNI/AAAAAAAAALw/TC__3hv1IPI/s1600/WP_20140119_033.jpg",
      rating: 4.5,
      category: "Banca",
      deliveryTime: "25-35 min",
    },
    {
      name: "Banca do Tio Zé",
      image: "https://st4.depositphotos.com/8186610/39767/i/450/depositphotos_397679940-stock-photo-fish-food-shop-close-raw.jpg",
      rating: 4.3,
      category: "Banca",
      deliveryTime: "20-30 min",
    },
    {
      name: "Banca da Marina",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmm4f50r6AtL9S1vPra95_YOCVwxo1iBEn2A&s",
      rating: 4.7,
      category: "Banca",
      deliveryTime: "30-40 min",
    },
    {
      name: "Banca do Porto",
      image: "https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/PEIXE.png",
      rating: 4.4,
      category: "Banca",
      deliveryTime: "35-45 min",
    },
    {
      name: "Banca Tropical",
      image: "https://conteudo.imguol.com.br/c/entretenimento/e2/2019/05/22/peixes-frescos-1558560558974_v2_900x506.jpg",
      rating: 4.6,
      category: "Banca",
      deliveryTime: "25-30 min",
    },
    {
      name: "Banca Central",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5HZxSq9wEDm1XdVf4UbMiYAd-rqhIWPQwew&s",
      rating: 4.5,
      category: "Banca",
      deliveryTime: "30-35 min",
    },
    {
      name: "Banca do João",
      image: "https://www.comprerural.com/wp-content/uploads/2020/08/O-mercado-de-peixes-da-piscicultura-no-Brasil.jpeg",
      rating: 4.2,
      category: "Banca",
      deliveryTime: "20-25 min",
    },
    {
      name: "Banca da Praça",
      image: "https://www.ubatuba.sp.gov.br/wp-content/uploads/sites/2/2016/01/Mercado.Mun_.Peixes.jpg",
      rating: 4.3,
      category: "Banca",
      deliveryTime: "40-50 min",
    },
    {
      name: "Banca da Esquina",
      image: "https://img.freepik.com/fotos-premium/variedade-de-peixe-a-venda-na-banca-do-mercado_687801-2362.jpg",
      rating: 4.1,
      category: "Banca",
      deliveryTime: "35-45 min",
    },
  ],
  Feiras: [
    {
      name: "Banca do Peixe",
      image: "https://s2-g1.glbimg.com/19Fv2r3pLLmMupnuwQM-D1G3MY8=/0x0:1280x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/W/i/LOMs8lQnSWJ79EdBlpHA/feirao-de-pescado-ads-2-.jpeg",
      rating: 4.8,
      category: "Feira",
      deliveryTime: "35-45 min",
    },
    {
      name: "Feira da Vila",
      image: "https://www.oimparcial.com.br/_midias/jpg/2015/11/07/683x455/1_sem_higienizacao__peixe_e_vendido_na_praia_grande_ao_lado_do_mercado_do_peixe___foto_honorio_moreira_3265__25_-161668.jpg",
      rating: 4.6,
      category: "Feira",
      deliveryTime: "30-40 min",
    },
    {
      name: "Feira do Centro",
      image: "https://prefeitura.poa.br/sites/default/files/styles/horizontal_grande/http/bancodeimagens.portoalegre.rs.gov.br/sites/default/files/2019/04/15/190415_Eduardo%2520Beleske_PMPA-04.jpg?itok=ZbdKADAw",
      rating: 4.7,
      category: "Feira",
      deliveryTime: "25-35 min",
    },
    {
      name: "Feira da Tarde",
      image: "https://www.digabahia.com.br/wp-content/uploads/2024/03/sesp_feira-do-peixe-centro-comercial_jean-victor.jpg",
      rating: 4.3,
      category: "Feira",
      deliveryTime: "30-40 min",
    },
    {
      name: "Feira Verde",
      image: "https://s2-g1.glbimg.com/j-EsFxZs6_LCBR1LbqKUEhvrhQ0=/0x0:1024x768/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/5/9/bdobhHTjinAb36sTLGeQ/peixes.jpg",
      rating: 4.6,
      category: "Feira",
      deliveryTime: "20-30 min",
    },
    {
      name: "Feira Sustentável",
      image: "https://s2-g1.glbimg.com/eVOpopIFkdEUBcYu9KSnzhF-XHU=/0x0:1400x934/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/x/B/qAPvnBSlCAZB3a8X7c0Q/lojistas-esperam-movimento-intenso-no-mercado-de-peixe-em-santos.jpg",
      rating: 4.4,
      category: "Feira",
      deliveryTime: "30-40 min",
    },
    {
      name: "Feira da Zona Sul",
      image: "https://fas-amazonia.org/wp-content/uploads/2022/12/feira-do-pirarucu-2020-emile-gomes-3-1000x667.jpg.webp",
      rating: 4.5,
      category: "Feira",
      deliveryTime: "35-45 min",
    },
    {
      name: "Feira da Família",
      image: "https://agenciapara.com.br/midias/2015/grandes/55652_149651.jpg",
      rating: 4.7,
      category: "Feira",
      deliveryTime: "25-30 min",
    },
    {
      name: "Feira Popular",
      image: "https://ceagesp.gov.br/wp-content/uploads/2024/03/2024-03-19-SANTA-FEIRA-DO-PEIXE-1-600x450.jpg",
      rating: 4.3,
      category: "Feira",
      deliveryTime: "20-25 min",
    },
  ],
  Peixarias: [
    {
      name: "Peixe Mania",
      image: "https://seafoodbrasil.com.br/images/noticias/por-que-estao-fechando-as-peixarias_1599220929.jpg",
      rating: 4.7,
      category: "Peixaria",
      deliveryTime: "30-40 min",
    },
    {
      name: "Maré Alta Peixaria",
      image: "https://diariodovale.com.br/wp-content/uploads/2018/02/PEIXARIA-..-PAULO-DIMAS-2.jpg",
      rating: 4.9,
      category: "Peixaria",
      deliveryTime: "25-35 min",
    },
    {
      name: "Peixaria do Mercado",
      image: "https://cdn.diariodesuzano.com.br/upload/dn_arquivo/2022/04/4-vendas-de-peixes-na-semana-santa-14-04-22-gm-13-copiar.jpg",
      rating: 4.5,
      category: "Peixaria",
      deliveryTime: "30-40 min",
    },
    {
      name: "Peixaria Amazônia",
      image: "https://static.ndmais.com.br/2022/04/peixaria-destaque-800x525.jpg",
      rating: 4.6,
      category: "Peixaria",
      deliveryTime: "40-50 min",
    },
    {
      name: "Peixaria do Zé",
      image: "https://tribunademinas.com.br/wp-content/uploads/2019/03/dentropeixaria-by-fernando-priamo.jpg",
      rating: 4.3,
      category: "Peixaria",
      deliveryTime: "20-30 min",
    },
    {
      name: "Peixaria do Porto",
      image: "https://s2-g1.glbimg.com/3SKvxPAu-emSXVOk9TjfEuoDWjo=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/B/7/ANmPFSRnSsM753zSv03w/expectativa-peixaria-04.jpg",
      rating: 4.7,
      category: "Peixaria",
      deliveryTime: "25-35 min",
    },
    {
      name: "Peixaria da Família",
      image: "https://diaonline.ig.com.br/wp-content/uploads/2020/06/peixarias-brasilia_4.jpg",
      rating: 4.4,
      category: "Peixaria",
      deliveryTime: "30-40 min",
    },
    {
      name: "Peixaria Bom Gosto",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRessStydGb1UnYOOqMFUyYeeRiAN7j1bL_Vw&s",
      rating: 4.8,
      category: "Peixaria",
      deliveryTime: "25-30 min",
    },
    {
      name: "Peixaria da Esquina",
      image: "https://www.borapescar.com/wp-content/uploads/2017/10/Destaque-6.jpg",
      rating: 4.2,
      category: "Peixaria",
      deliveryTime: "30-35 min",
    },
  ],
  Restaurantes: [
    {
      name: "Restaurante do Peixe",
      image: "https://superhiper.com.br/devlop/wp-content/uploads/2024/05/1-52.jpg",
      rating: 4.8,
      category: "Restaurante",
      deliveryTime: "40-50 min",
    },
    {
      name: "Sabor do Rio",
      image: "https://cdn6.campograndenews.com.br/uploads/noticias/2020/03/10/2mc33qglmp6o0.jpg",
      rating: 4.6,
      category: "Restaurante",
      deliveryTime: "30-40 min",
    },
    {
      name: "Cantinho do Peixe",
      image: "https://f.i.uol.com.br/folha/comida/images/12009904.jpeg",
      rating: 4.5,
      category: "Restaurante",
      deliveryTime: "35-45 min",
    },
    {
      name: "Delícias do Mar",
      image: "https://img.freepik.com/fotos-premium/o-mercado-de-peixes-marinhos-mercado-de-rua-venda-de-peixe-fresco-peixe-acabado-de-pescar-loja-de-peixes-produtos-para-restaurante-pesca-cozinha-asiatica-frutos-do-mar-dieta-saudavel-pescador-pegar-comida-fresca_135372-757.jpg",
      rating: 4.7,
      category: "Restaurante",
      deliveryTime: "40-50 min",
    },
    {
      name: "Tambaqui Grill",
      image: "https://cms-blog.saipos.com/Como-montar-um-restaurante-de-peixes-e-frutos-do-mar-SAIPOS-sistema-para-restaurante-4.png",
      rating: 4.9,
      category: "Restaurante",
      deliveryTime: "30-35 min",
    },
    {
      name: "Peixe & Cia",
      image: "https://ac24horas.com/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-07-at-05.10.45.jpeg",
      rating: 4.3,
      category: "Restaurante",
      deliveryTime: "20-30 min",
    },
    {
      name: "Canto do Rio",
      image: "https://img.freepik.com/fotos-premium/peixe-cozido-em-placa-branca-com-salada-verde_88281-1616.jpg",
      rating: 4.4,
      category: "Restaurante",
      deliveryTime: "25-35 min",
    },
    {
      name: "Recanto Amazônico",
      image: "https://www.gestaoderestaurantes.com.br/img/fotos_anuncios/anuncio_613/b66bcea56829bfd49fe6171b05927602.jpg",
      rating: 4.6,
      category: "Restaurante",
      deliveryTime: "30-40 min",
    },
    {
      name: "Tempero do Norte",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqwyRoX1CSNaKW40jCrTYscj0Geh9Y8YKkXg&s",
      rating: 4.5,
      category: "Restaurante",
      deliveryTime: "35-45 min",
    },
  ],
  Supermercados: [
    {
      name: "Super Peixe",
      image: "https://www.pegpesehortifruti.com.br/wp-content/uploads/2020/09/pegpese_setores_peixes1.jpg",
      rating: 4.2,
      category: "Supermercado",
      deliveryTime: "60 min",
    },
    {
      name: "Mercadinho do Bairro",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Oknt87mMcZVzEvzHXbKCh4wgsxFfmurQPg&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlfRlbCAYK8DrlHx1OJ_jQlv6CfW8vjfXrcQ&s",
      rating: 4.4,
      category: "Supermercado",
      deliveryTime: "55 min",
    },
    {
      name: "Super Norte",
      image: "https://s3.glbimg.com/v1/AUTH_35862ca5c6ab48b992baf1f1b4f7062e/m-extra-globo-com/incoming/22463185-db7-78f/w488h275-PROP/infochpdpict000050445740.jpg",
      rating: 4.3,
      category: "Supermercado",
      deliveryTime: "50 min",
    },
    {
      name: "Pescador Market",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRZCZWCXtRL8HTrfA-Vk8uoCRfAoEt7Mi4NQ&s",
      rating: 4.6,
      category: "Supermercado",
      deliveryTime: "40 min",
    },
    {
      name: "Distribuidora de Pescados Sta Rosa",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFBVLJ7GwZJuyq-kSk8Gdl54Yx1G9oEwcRXQ&s",
      rating: 4.7,
      category: "Supermercado",
      deliveryTime: "55 min",
    },
    {
      name: "Mega Peixe",
      image: "https://www.grupolideronline.com.br/img/_webp/internas/supermercardo-05.webp",
      rating: 4.5,
      category: "Supermercado",
      deliveryTime: "60 min",
    },
    {
      name: "SuperBarato Peixe",
      image: "https://www.santos.sp.gov.br/static/files_www/styles/newspagemodal/public/field/image/nathalia_filipe_1580.jpg",
      rating: 4.2,
      category: "Supermercado",
      deliveryTime: "50 min",
    },
    {
      name: "Mercado Peixe Forte",
      image: "https://www.santos.sp.gov.br/static/files_www/files/portal_files/nathalia_filipe_1610.jpg",
      rating: 4.3,
      category: "Supermercado",
      deliveryTime: "45 min",
    },
    {
      name: "Economart Peixe",
      image: "https://thumbs.dreamstime.com/b/peixes-expostos-no-gelo-corredor-dos-frutos-do-mar-supermercado-de-marisco-com-peixe-fresco-exibido-em-frio-197339581.jpg",
      rating: 4.4,
      category: "Supermercado",
      deliveryTime: "30 min",
    },
  ],
};

export function SettlementList() {
  const scrollRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    scrollRefs.current.forEach((scrollContainer) => {
      if (!scrollContainer) return;

      let isDown = false;
      let startX: number;
      let scrollLeft: number;

      const onMouseDown = (e: MouseEvent) => {
        isDown = true;
        scrollContainer.classList.add("cursor-grabbing");
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
      };

      const onMouseLeave = () => {
        isDown = false;
        scrollContainer.classList.remove("cursor-grabbing");
      };

      const onMouseUp = () => {
        isDown = false;
        scrollContainer.classList.remove("cursor-grabbing");
      };

      const onMouseMove = (e: MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 1.5; // sensibilidade
        scrollContainer.scrollLeft = scrollLeft - walk;
      };

      scrollContainer.addEventListener("mousedown", onMouseDown);
      scrollContainer.addEventListener("mouseleave", onMouseLeave);
      scrollContainer.addEventListener("mouseup", onMouseUp);
      scrollContainer.addEventListener("mousemove", onMouseMove);

      return () => {
        scrollContainer.removeEventListener("mousedown", onMouseDown);
        scrollContainer.removeEventListener("mouseleave", onMouseLeave);
        scrollContainer.removeEventListener("mouseup", onMouseUp);
        scrollContainer.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="space-y-8 mt-4">
      {categories.map((category, idx) => (
        <section key={idx} className="select-none w-full space-y-4">
          <h2 className="text-xl font-bold text-indigo-950 px-4">{category}</h2>
          <div
            ref={(el) => {
              if (el) scrollRefs.current[idx] = el;
            }}
            className="flex px-4 overflow-x-auto scroll-smooth snap-x gap-4 pb-2 scrollbar-hide cursor-grab"
          >
            {(restaurantsByCategory[category] || []).map((rest, i: Key | null | undefined) => (
              <div key={i} className="shrink-0 snap-start w-[250px]">
                <RestaurantCard {...rest} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}