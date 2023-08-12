import React from 'react';

export default function InfoSection() {
  return (
    <section className="flex flex-col text-justify space-y-6 w-full p-4 py-12 md:px-40 lg:px-96">
      <h4 className="text-2xl font-semibold">
        Welcome to Pomolite - Elevate Your Productivity with the Power of
        Pomodoro Technique!
      </h4>
      <p>
        Are you tired of battling distractions and struggling to maintain focus
        on your tasks? Look no further! Our cutting-edge Pomodoro
        Technique-centered website is here to revolutionize the way you work and
        boost your productivity to new heights.
      </p>
      <h5 className="text-xl font-semibold">What is the Pomodoro Technique?</h5>
      <p>
        The Pomodoro Technique is a time management method designed to enhance
        your concentration and efficiency. By breaking your work into focused
        intervals (traditionally 25 minutes), followed by short breaks, you can
        train your brain to work at its optimal capacity, achieving more in less
        time. See more on{' '}
        <a
          className="text-blue-600 font-semibold"
          href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
          target="_blank"
        >
          Wikipedia
        </a>
      </p>
      <h5 className="text-xl font-semibold">
        Why Choose Our Pomodoro Website?
      </h5>
      <p>
        At Pomolite, we have harnessed the power of advanced technologies to
        provide you with an unparalleled Pomodoro experience. Our website is
        built using the latest tech stack, including Next.js for lightning-fast
        performance, Tailwind CSS for sleek and intuitive design, Prisma and
        Postgres for robust data management, and deployed seamlessly on Vercel
        and Railway for a smooth user experience.
      </p>
      <h5 className="text-xl font-semibold">Key Features:</h5>
      <ol className="flex flex-col space-y-2">
        <li>
          <strong>Intuitive Interface:</strong> Our user-friendly interface
          ensures a seamless navigation experience, allowing you to effortlessly
          set up your Pomodoro sessions and manage your tasks.
        </li>
        <li>
          <strong>Customizable Timer:</strong> Tailor your work intervals and
          breaks to suit your unique workflow. Whether you prefer shorter
          sprints or longer periods, we heve got you covered.
        </li>
        <li>
          <strong>Task Management:</strong> Organize your tasks within the app,
          assigning them to specific Pomodoro sessions. Stay on top of your
          to-do list and watch your productivity soar.
        </li>
        <li>
          <strong>Real-time Progress Tracking:</strong> Gain insights into your
          work patterns with real-time progress tracking. Visualize your
          accomplishments and identify areas for improvement.
        </li>
        <li>
          <strong>Sync Across Devices:</strong> Access your Pomodoro sessions
          and tasks from anywhere, as our website seamlessly syncs your data
          across different devices.
        </li>
        <li>
          <strong>Distraction-free Mode:</strong> Activate our distraction-free
          mode to block out interruptions and maintain your focus throughout
          each Pomodoro session.
        </li>
        <li>
          <strong> Community Support:</strong> Connect with like-minded
          individuals through our community forum. Share your tips, challenges,
          and success stories, fostering a supportive environment for everyone
          to thrive.
        </li>
      </ol>
      <p>
        Experience the transformative power of the Pomodoro Technique like never
        before. Join us at Pomolite and elevate your productivity to new
        heights. Say goodbye to distractions and hello to a more focused,
        efficient, and accomplished you!
      </p>
      <p> Ready to take control of your time? Get started today!</p>
    </section>
  );
}
