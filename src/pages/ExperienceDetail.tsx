import { useEffect, useState } from "react";
import Approach from "../components/Approach";
import { workExperience } from "../data/index";
import { useParams } from "react-router-dom";

interface ExperienceType {
  id: number;
  title: string;
  desc: string;
  className: string;
  thumbnail: string;
  details: ExperienceDetailType[];
}

interface ExperienceDetailType {
  heading: string;
  detail: string;
}

const ExperienceDetail = () => {
  const { id } = useParams();
  const [experience, setExperience] = useState<ExperienceType | null>(null);

  const fetchSingleDetail = () => {
    const data = workExperience.find((item) => item.id === Number(id)) ?? null;
    setExperience(data);
  };

  useEffect(() => {
    fetchSingleDetail();
  }, [id]);
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>
      <Approach />
    </section>
  );
};

export default ExperienceDetail;
