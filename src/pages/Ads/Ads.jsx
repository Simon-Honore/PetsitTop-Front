import './Ads.scss';
import InputSelectDepartment from '../../components/InputSelectDepartment/InputSelectDepartment';
import adsData from '../../data/seed/ads.json';
import AdCard from './AdCard/AdCard';

function Ads() {
  const count = adsData.length;

  // const ad = {
  //   id: 1,
  //   title: 'Aspernatur ullam est sint provident reprehenderit error recusandae voluptate.',
  //   content: 'Rem cumque esse voluptas eum illum recusandae fugiat praesentium. Repellat praesentium accusantium placeat \nsunt nam nisi consequuntur ad consequuntur. Tenetur deserunt incidunt voluptatem ad.\nPraesentium minus aliquam itaque qui omnis fuga. Harum enim molestiae magni officia odit libero. Sint exercitationem voluptatibus laboriosam error consectetur quae voluptas possimus. Ex nihil libero. Voluptates accusamus non.\nDelectus enim at rerum harum aliquam perspiciatis quod laudantium. Distinctio nam atque fuga alias sequi. Maxime modi corporis facere.',
  //   city: 'Orléans',
  //   postal_code: '44220',
  //   user_id: 2,
  //   created_at: '2023-02-23T17:32:39.673Z',
  //   updated_at: null,
  // };

  return (
    <main className="ads">
      <header className="ads__header">
        <h2 className="ads__header__title">Toutes les annonces</h2>
        <form className="ads__header__filter">
          <p className="ads__header__filter__description">Votre département :</p>
          <InputSelectDepartment />
          <button type="submit" className="ads__header__filter__btn">FILTRER</button>
        </form>
        <p className="ads__header__count">
          {count > 1
            ? `${count} annonces diponibles`
            : `${count} annonce diponible` }
        </p>
      </header>
      {adsData.map((ad) => (
        <AdCard
          key={ad.id}
          {...ad}
        />
      ))}

    </main>
  );
}

export default Ads;
